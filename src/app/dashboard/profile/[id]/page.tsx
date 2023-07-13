interface ProfileParams {
  params: {
    id: string
  }
}

export default function Profile({ params }: ProfileParams) {
  const { id } = params
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}
