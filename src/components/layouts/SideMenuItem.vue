<template>
	<!-- group header — หัวข้อจางๆ กดไม่ได้ (el-menu-item-group) -->
	<el-menu-item-group v-if="!!item[groupField] && !!item[itemsField]" :title="item[groupField]">
		<side-menu-item
			v-for="(child, childIndex) in item[itemsField]"
			:key="child._id || childIndex"
			:item="child"
			:index-path="`${indexPath}-${childIndex}`"
			:depth="depth"
			:sub-menu-prefix="subMenuPrefix" />
	</el-menu-item-group>

	<!-- sub menu — recursive ซ้อนได้ไม่จำกัดชั้น
	     (role ถูกกรองที่ SideMenu.filterByRole แล้ว ไม่ต้องใช้ v-can ตรงนี้) -->
	<el-sub-menu
		v-else-if="!!item[subMenuField]"
		:index="itemPath || indexPath"
		@click="!!itemPath ? handleClick() : undefined">
		<template #title>
			<svg-icon class="menu-icon" v-if="!!itemIcon" :icon-name="itemIcon" />
			<span class="menu-label">{{ itemLabel }}</span>
		</template>
		<side-menu-item
			v-for="(child, childIndex) in item[subMenuField]"
			:key="child._id || childIndex"
			:item="child"
			:index-path="`${indexPath}-${childIndex}`"
			:depth="depth + 1"
			:sub-menu-prefix="subMenuPrefix" />
	</el-sub-menu>

	<!-- leaf item -->
	<el-menu-item
		v-else
		:class="depth > 0 ? 'sub-menu-item' : 'menu-item'"
		:index="itemPath || indexPath"
		@click="!!itemPath ? handleClick() : undefined">
		<svg-icon class="menu-icon" v-if="!!itemIcon" :icon-name="itemIcon" />
		<span class="menu-label">{{ itemLabel }}</span>
	</el-menu-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'SideMenuItem',
	props: {
		item: {
			type: Object as PropType<any>,
			required: true,
		},
		// fallback index ตามตำแหน่งในต้นไม้ เช่น "0-1-2" — ใช้เมื่อ item ไม่มี path กัน index ชนกัน
		indexPath: {
			type: String,
			required: true,
		},
		// ความลึกปัจจุบัน (0 = เมนูหลัก) — ใช้ตัดสินว่าจะ apply subMenuPrefix ไหม
		depth: {
			type: Number,
			default: 0,
		},
		subMenuPrefix: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			router: useRouter(),
			subMenuField: 'subMenu',
			groupField: 'group',
			itemsField: 'items',
			pathField: 'path',
			iconField: 'icon',
			labelField: 'label',
		};
	},
	computed: {
		itemPath(): string | undefined {
			return this.fieldValue(this.pathField);
		},
		itemLabel(): string | undefined {
			return this.fieldValue(this.labelField);
		},
		itemIcon(): string | undefined {
			return this.fieldValue(this.iconField);
		},
	},
	methods: {
		// item ใต้ sub menu (depth ≥ 1) อ่าน key แบบมี prefix เมื่อกำหนด subMenuPrefix
		// เพื่อ backward compat กับ data แบบเดิม (sub_path, sub_label, ...)
		fieldValue(field: string) {
			if (this.depth > 0 && !!this.subMenuPrefix) {
				return this.item[`${this.subMenuPrefix}${field}`];
			}
			return this.item[field];
		},
		handleClick() {
			if (!!this.itemPath) {
				this.router.push(this.itemPath);
			}
		},
	},
});
</script>
<style lang="scss" scoped></style>
