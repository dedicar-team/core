import jwt from 'jsonwebtoken';

class JWT {
    async generateJwtToken(id: unknown): Promise<string> {
        const payload = { id }; // Customize payload as needed
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: '30m' }); // Set token expiration to 1 day
        return token;
    }

    async verifyJwtToken(token: string) {
        try {
            const decoded = JSON.parse(jwt.verify(token, process.env.JWT_SECRET_KEY!) as unknown as string);
            return decoded;
        } catch (error) {
            return 'invalid token'; // Invalid token
        }
    }

    async generateRefreshToken(id: unknown): Promise<string> {
        const payload = { id }; // Customize payload as needed
        const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY!, { expiresIn: '1h' }); // Set token expiration to 7 days
        return token;
    }

    async verifyRefreshToken(token: string) {
        try {
            const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY!);
            return decoded;
        } catch (error) {
            return 'invalid token'; // Invalid token
        }
    }
}