'use server'

export async function createItem(prevState, formData) {
  // Just to create a delay for testing pressing the Enter key while in the text field
  await new Promise(resolve => setTimeout(resolve, 2500))

  return { message: `You created ${formData.get('item')}` }
}
