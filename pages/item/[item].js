import { useRouter } from 'next/router'

const Item = () => {
  const router = useRouter()
  const { item } = router.query

  return <p>Item: {item}</p>
}

export default Item
