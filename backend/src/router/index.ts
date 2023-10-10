import { Router } from "express";
import routerClient from './routerClient'
import routerProperty from "./routerProperty";
import routerOwner from './routerOwner'

const router = Router();

router.use('/', routerClient)
router.use('/prop', routerProperty)
router.use('/owner', routerOwner)


export default router;