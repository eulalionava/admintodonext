import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Segments{
    params:{
        id:string
    }
}

export async function GET(request: Request,{ params }:Segments) { 
    const { id } = params;

    const todo = await prisma.todo.findFirst({
        where:{id}
    })

    if(!todo){
        return NextResponse.json({message:`Todo con el id ${id} no existe`},{status:401});
    }

    return NextResponse.json(todo);

}

const putSchema = yup.object({
    complete:yup.boolean().optional(),
    description:yup.string().optional()
})

export async function PUT(request: Request,{ params }:Segments) { 
    const { id } = params;

    const todo = await prisma.todo.findFirst({
        where:{id}
    })

    if(!todo){
        return NextResponse.json({message:`Todo con el id ${id} no existe`},{status:401});
    }
    try {
        const {complete,description, ...rest } =await putSchema.validate(await request.json());
    
        const updateTodo = await prisma.todo.update({
            where:{id},
            data: { complete,description}
        })
    
        return NextResponse.json(updateTodo);
        
        
    } catch (error) {
        return NextResponse.json(error,{status:400});
    }


}