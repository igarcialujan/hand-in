import { Router } from 'express';
const router = Router();
import { string } from 'joi';

import { getUserById } from '../store/users';
import auth from '../src/api/middleware/auth';
import validateWith from '../src/api/middleware/validation';

router.post(
    '/',
    [auth, validateWith({ token: string().required() })],
    (req, res) => {
        const user = getUserById(req.user.userId);
        if (!user) return res.status(400).send({ error: "Invalid user." });

        user.expoPushToken = req.body.token;
        console.log("User registered for notifications: ", user);

        res.status(201).send();
    }
);

export default router;
