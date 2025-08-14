import { PUBLIC_API_KEY } from '$env/static/public';
import { FLAGS_SECRET, DEEP_SECRET } from '$env/static/private';
import { json } from '@sveltejs/kit';

export function GET() {
	return json({
		publicKey: PUBLIC_API_KEY,
		unencryptedSecret: FLAGS_SECRET,
		cloudflareSecretKey: DEEP_SECRET
	});
}
