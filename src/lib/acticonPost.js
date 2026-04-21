import { revalidatePath } from "next/cache";
import { getTasks } from "./postdata";


export const actionPost = async (fromData) => {
  "use server";


  const newfrom =Object.fromEntries(fromData.entries())

  const res = await getTasks(newfrom)
  console.log(res)

};
