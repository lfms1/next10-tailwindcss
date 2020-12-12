import Nav from '../components/Nav'
import StackAvatar from '../components/StackAvatar';

const srcArray = [
  "images/avatar1.jpg",
  "images/avatar2.jpg",
]

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100 py-5">
          Next.js + Tailwind CSS 2.0
        </h1>
        <h6 className="flex items-center justify-center w-screen py-5 font-bold text-white bg-blue-500 rounded">Avatar Stack</h6>
        <div className="flex items-center justify-center w-screen py-10">
          <StackAvatar srcArray={srcArray} />
        </div>
      </div>
    </div>
  )
}