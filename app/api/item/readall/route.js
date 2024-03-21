import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

export async function GET(){
    try{
        await connectDB()  
        const allItems = await ItemModel.find() 
        return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems: allItems})
    }catch{
        return NextResponse.json({message: "アイテム読み取り失敗（オール）"})
    }
}

export const revalidate = 0 