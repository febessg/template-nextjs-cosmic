export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/689b4077b032ab872be945d5?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar dados da home");
    }

    return res.json();
  } catch (error) {
    throw new Error("Erro ao buscar dados da home");
  }
}
