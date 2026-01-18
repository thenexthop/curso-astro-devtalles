// import bcrypt from 'bcryptjs';
// import { prisma } from '@/db';

// export default defineConfig({
//     providers: [
//         // TODO: Agregar providers
//         // GitHub({
//         //   clientId: import.meta.env.GITHUB_CLIENT_ID,
//         //   clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
//         // }),
//         Credentials({
//             credentials: {
//                 email: { label: "Correo", type: "email" },
//                 password: { label: "Contraseña", type: "password" },
//             },
//             authorize: async ({ email, password }) => {

//                 const user = await prisma.user.findUnique({
//                     where: { email: `${email}` },
//                 });

//                 if (!user) {
//                     throw new Error("El usuario no está registrado.");
//                 }

//                 if (!bcrypt.compareSync(password as string, user.password as string)) {
//                     throw new Error("Contraseña incorrecta.");
//                 }

//                 const { password: _, ...rest } = user;

//                 return rest;
//             },
//         }),
//     ],
// });