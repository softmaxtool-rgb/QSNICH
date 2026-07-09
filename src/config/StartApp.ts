import { ProviderType, type SdProvider } from '~/types/SdGridType';
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';
import { registerRoles } from './Acl';

export const initApp = async function () {
	try {
		const appState = useAppStateStore();
		await appState.getParams();

		const userState = useConnectStateStore();
		if (!!userState.user) {
			if (!!userState.user.two_factor_enabled) {
				userState.require2FA = true;
			} else {
				userState.require2FA = false;
			}
		}
		await userState.refreshToken();
	} catch {
		// catch error to start app on success or failure
	}
};

export const getRoles = async function () {
	const appState = useAppStateStore();
	const userState = useConnectStateStore();

	if (!!appState.roles && Object.keys(appState.roles).length > 0) {
	} else {
		if (!!userState.user && !!userState.user.token) {
			const dpRoles: SdProvider = {
				providerId: 'getroles-all',
				providerType: ProviderType.SYS,
			};

			await userState.crudGetAll(
				{ sdProvider: dpRoles, totalEnable: false },
				(reply: any) => {
					appState.roles = reply.data.map((item: any) => {
						return item.role_name;
					});
					// custom roles โหลดหลัง app.use(acl) — ต้องลงทะเบียนเข้า ACL เพิ่ม
					// ไม่งั้น anyCan/v-can ไม่รู้จัก role กลุ่มนี้ (มองเป็นไม่มีสิทธิ์เสมอ)
					registerRoles(appState.roles);
				},
				() => {
					appState.roles = [];
				}
			);
		}
	}
};

export const getUser = function () {
	try {
		const userState = useConnectStateStore();
		let user = userState.user;
		if (user != null) {
			return user;
		}
		return {};
	} catch {
		// catch error to start app on success or failure
		return {};
	}
};
