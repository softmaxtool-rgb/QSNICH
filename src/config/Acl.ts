import { defineAclRules, createAcl } from 'vue-simple-acl';
import { type SdUserLogin } from '~/types/User';
import { computed } from 'vue';
import router from '~/routers';
import { useAppStateStore } from '~/stores/AppState';
import { useConnectStateStore } from '~/stores/ConnectState';

const user = computed(() => useConnectStateStore().user);

// รายชื่อ role ที่ลงทะเบียน rule ไปแล้ว — กัน setRule ชื่อซ้ำ
// (role อาจมาได้หลายทาง: default / sys_roles_list / Roles Manager — ถ้าซ้ำ lib จะ console.warn)
const registeredRoleNames = new Set<string>();

const setRoleRules = (setRule: any, roleNames: string[]) => {
	roleNames.forEach((roleName: string) => {
		if (registeredRoleNames.has(roleName)) {
			return;
		}
		registeredRoleNames.add(roleName);
		setRule(roleName, (user: SdUserLogin) => !!user.roles && user.roles.includes(roleName));
	});
};

const rules = () =>
	defineAclRules<SdUserLogin>(async (setRule) => {
		// setRule('unique-ability', callbackFunction(user, arg1, arg2, ...) { });
		// setRule(['unique-ability-1', 'unique-ability-2'], callbackFunction(user, arg1, arg2, ...) { });
		// Define a simple rule for ability with no argument
		const appState = useAppStateStore();
		const params: any = appState.params;

		let roles = ['super', 'admin', 'manager', 'auth', 'user', 'guest'];
		if (!!params['sys_roles_list'] && Array.isArray(params['sys_roles_list'])) {
			roles = params['sys_roles_list'];
		}

		roles = roles.concat(appState.roles);

		setRoleRules(setRule, roles);
	});

const acl = createAcl({
	user, // short for user: user
	rules, // short for rules: rules
	router,
	// other optional vue-simple-acl options here ...
	onDeniedRoute: '/unauthorized',
});

// ลงทะเบียน role เพิ่มหลังจาก app.use(acl) ไปแล้ว — ใช้กับ custom roles จาก Roles Manager
// ที่โหลดทีหลังตอน getRoles() (rules() หลักรันครั้งเดียวตอนติดตั้ง เลยไม่เห็น roles กลุ่มนี้)
// ชื่อที่ลงทะเบียนไปแล้วจะถูกข้าม — ไม่ปล่อยให้ lib เตือน duplicate
export function registerRoles(roleNames: string[]) {
	const newRoles = roleNames.filter((roleName) => !registeredRoleNames.has(roleName));
	if (newRoles.length === 0) {
		return;
	}

	defineAclRules<SdUserLogin>(async (setRule) => {
		setRoleRules(setRule, newRoles);
	});
}

export default acl;
