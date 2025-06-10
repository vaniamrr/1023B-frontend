function Header() {
  return (
    <header>
        <nav>
            <div>
                <a href="">Central do vendedor</a>
                <a href="">Vender na Shopee</a>
                <a href="">Baixe o app</a>
                <a href="">Siga nos no</a>
                <a href="">Instagram</a>
                <a href="">X</a>
                <a href="">TikTok</a>
            </div>
            <ul>
                <li>
                    <a href="">Notificações</a>
                </li>
                <li>
                    <a href="">Ajuda</a>
                </li>
                <li>
                    <a href="">Português (BR)</a>
                </li>
                <li>
                    <a href="">Cadastrar</a>
                </li>
                <li>
                    <a href="">Entre</a>
                </li>
            </ul>   
        </nav>
        <div className="container">
            <div>Logo</div>
            <div>
                <input type="text" placeholder="Buscar na Shopee"/>
                <button>Pesquisar</button>
            </div>
            <div>Carrinho</div>
        </div>
    </header>
  )
}

export default Header;