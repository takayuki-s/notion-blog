import Link from 'next/link'
import React from 'react'

const Tag = () => {
  return (
    <div className="mx-4">
      <section className="lg:w-1/2 mb-8 mx-auto bg-orange-200 rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 duration-300 transition-all">
        <div className="font-medium mb-4">タグ検索</div>
        <div className="flex flex-wrap gap-5">
          <Link href="/posts/tag/Blog/page/1">
            <span className="cursor-pointer px-2 font-medium pb-1 rounded-xl bg-gray-400 inline-block">
              Blog
            </span>
          </Link>
          <Link href="/posts/tag/TypeScript/page/1">
            <span className="cursor-pointer px-2 font-medium pb-1 rounded-xl bg-gray-400 inline-block">
              TypeScript
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Tag
