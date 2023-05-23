import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase, signRepository } from "arch";
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            credentials: {},
            async authorize({ login, password }: { login?: string, password?: string }, req) {
                if (login && password) {
                    await connectToDatabase({ maxPoolSize: 5 })
                    const user = await signRepository.model.findOne({ login })
                    const result = user && await bcrypt.compare(password, user.password)
                    // Any object returned will be saved in `user` property of the JWT
                    return result ? { id: user._id.toString(), name: user.login } : null
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }