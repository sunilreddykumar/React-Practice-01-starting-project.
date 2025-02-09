export default function TabButton({children, isSelecrted, ...props}){
    console.log('Tab component executing');
    return (
    <li>
        <button className={isSelecrted ? 'active' : undefined} {...props}>
            {children}
         </button>        
    </li>
    );
}