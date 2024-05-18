// import { validatePassword } from "../services/user.service";
// import log from "../utils/logger";

// export async function createLoginSessionHandler(request: Request, response: Response) {
//     log.info(`${request.url} has requested!`);
//     const user = await validatePassword(request.body);

//     if(!user) {
//         return response.status(401).send("Invalid username or password");
//     }
//     const session = await createSession(user._id, request.get("user-agent") || "");
//     const accessToken = signJWT({
//         ...user, session: session._id }, { expiresIn: config.get("accessTokenTimeToLeave") }
//     )
//     const refreshToken = signJWT({
//         ...user, session: session._id }, { expiresIn: config.get("refreshTokenTimeToLeave") }
//     )
//     return response.send({ accessToken, refreshToken, user });
}