
import { Image } from "@nextui-org/react";

export default function Logo ()
{
    return (
        <a href  = "https://github.com/ingila185" target = "blank">
        <Image
        
      width={20}
      height={20}  
      src="../github.png"
      alt="Default Image"
      objectFit="fill"
    />
 <h5>GitHub Repository</h5>
</a>

  );
    
}