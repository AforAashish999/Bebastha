"use server";
import ClientService from "@/services/client.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export async function createClientAction(prevState, formData) {
    try{
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            address: formData.get("address"),
            phone_no: formData.get("phone_no"),
            organization: formData.get("organization"),
            project: formData.get("project"),
            status: "Untouched",
            created_at: new Date().toISOString() // ← auto timestamp
        };

        await ClientService.create(payload);
        revalidatePath("/clients");
       
        return {success: true }
    }
     catch(error){
        return{
            success: false,
            message: "falied to create client"
        };
     }
}

export async function deleteClientAction(id){
    await ClientService.delete(id);
    revalidatePath("/clients");
}

export async function updateClientAction(prevState, formData){
    try{
        const id = formData.get("id") //getting the id form form

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            address: formData.get("address"),
            phone_no: formData.get("phone_no"),
            organization: formData.get("organization"),
            project: formData.get("project"),
            status: formData.get("status")
        }
        await ClientService.update(id, payload);
        revalidatePath("/clients");

        return { success: true}
    }
    catch(error){
        return{
            success: false,
            message: "failed to update client"
        }
    }
    
}