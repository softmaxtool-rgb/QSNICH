export interface ConnectProject {
	license_token: string | null;
	register_id: string | null;
	form_basic?: number;
	form_pro?: number;
	sql_builder?: number;
	api_builder?: number;
	report_builder?: number;
	license_limit?: number;
	license_expire?: string | null;
	public_key?: string; // platform/license public key — ใช้ decode form_model (มาจาก VITE_PUBLIC_KEY ใน .env)
}
