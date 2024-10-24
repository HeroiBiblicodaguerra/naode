import {Router,Request,Response} from 'express'
import * as HomeController from '../controllers/homeController'
import * as infoController from '../controllers/infocontroller'
import * as usercontroller from '../controllers/userController'




const router = Router()

//ROTA HOME
router.get('/',HomeController.home)
router.get('/contato',infoController.contato)
router.get('/sobre',infoController.sobre)

router.get('/nome',usercontroller.nome)
//GET exibe a página
router.get('/idade',usercontroller.idade)
//POST processa as informações
router.post('/idade-resultado',usercontroller.resultadoIdade)



export default router
