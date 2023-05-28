

export const Button = ({className, label, handleButtonClick})=> 
{
    return (<div
     className={"btn btn-" + className}
     onclick={ () => handleButtonClick(label)}
    >
        {label}</div>
        )
}
