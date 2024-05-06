import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div>
                <Link href="/">
                    <Image src="/header.svg" width={1330} height={148} alt="header-image" priority/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link href="/user/register">登録</Link></li>
                    <li><Link href="/user/login">ログイン</Link></li>
                    <li><Link href="/item/create">アイテム作成</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
