import type { NextApiRequest, NextApiResponse } from "next";
import prima from "../../../prisma";
import bcrypt from "bcrypt";

type Data = {
  user?: User;
  success?: boolean;
  message?: string;
};

type User = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const { name, email, password } = req.body;
    if (!email || !password || !name)
      return res
        .status(400)
        .json({ message: "Username & passsword required!" });

    const user = await prima.user.findUnique({ where: { email } });
    if (user)
      return res.status(400).json({ message: "You can not create an account" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prima.user.create({
      data: { email, password: hashedPassword, name },
    });

    return res.status(201).json({
      user: { email: createdUser.email, password: createdUser.password },
      message: `🚀 Account created`,
    });
  }
}
