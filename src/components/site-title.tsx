

export default function SiteTitle(){

    return (
        <div className="w-[250px] h-[60px] flex flex-row p-2 lg:left-[39%] sm:left-[50%] absolute">
            <a className="flex flex-row" href="">
                <img className="w-12 h-8 m-auto" src="/src/assets/icons/site-logo.png"/>
                <h1 className="font-mono text-[24px] font-bold my-auto">Ninja Buffet</h1>
            </a>
        </div>
    )
}