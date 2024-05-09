This is a Next.js app that gives an example of how to prevent double submit on a form using `usActionState` and `useFormStatus`. It was given as a [StackOverflow answer](https://stackoverflow.com/questions/77902231/how-to-prevent-form-submission-with-enter-key-when-a-server-action-is-pending/78445866#78445866).

It was boostrapped by running `npx create-next-app@14.3.0-canary.47`.

Note, there is a contrived 2.5 second delay while submitting the form to help with testing.

1. `npm run dev`.
2. Navigate to http://localhost:300.
3. Open your Network tab in dev console tools.
4. Enter something in the text field.
5. Press the Enter key on your keyboard to submit.
6. Press the Enter key again while the previous submission is ongoing, you should not see another request.
