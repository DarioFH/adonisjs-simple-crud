import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'

export default class CommentsController {

    public async store({params, request, response}: HttpContextContract){
        const body = request.body()
        const momentId = params.momentId

        const moment = await Moment.findOrFail(momentId)
        body.momentId = moment.id
        const comment = await Comment.create(body)

        response.status(201)

        return {
            mnsg: "Comentário inserido com sucesso!",
            data: comment
        }
    }
}
