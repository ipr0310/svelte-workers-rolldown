import { json } from '@sveltejs/kit';

// Build Enviroment Variables
import { PUBLIC_API_KEY } from '$env/static/public';
import { FLAGS_SECRET, DEEP_SECRET } from '$env/static/private';

// Runtime Enviroment Variables
import { env } from '$env/dynamic/private';

export function GET() {
	return json({
		static: {
			publicKey: PUBLIC_API_KEY,
			unencryptedSecret: FLAGS_SECRET,
			cloudflareEncryptedSecretKey: DEEP_SECRET,
			requestDate: new Date().getUTCMilliseconds()
		},
		dynamic: {
			unencrypted: env.DYNAMIC_SECRET,
			cloudflareEncryptedDyanmicKey: env.ENCRYPTED_DYNAMIC_SECRET
		}
	});
}
