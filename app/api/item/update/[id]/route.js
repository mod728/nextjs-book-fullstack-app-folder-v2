import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels" 

export async function PUT(request, context){
    const reqBody = await request.json() 
    try{
        await connectDB()
        await ItemModel.updateOne({_id: context.params.id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
    }catch{
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}