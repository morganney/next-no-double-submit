'use client'

import { SubmitButton } from '@/app/submit-button'
import { createItem } from '@/app/actions'

import { useActionState } from 'react'

const initialState = { message: 'You created nothing' }

export default function Home() {
  const [state, formAction] = useActionState(createItem, initialState)

  return (
    <form action={formAction}>
      <input required type="text" name="item" />
      <SubmitButton />
      <p>{state.message}</p>
    </form>
  )
}
