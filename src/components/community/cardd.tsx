 
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface CardProps {
  description: string;
}

export default function cardd({ description }: CardProps) {
  return (
    <Card className="mt-6 w-96 border border-gray-300 rounded-lg bg-[#F5F7FA] flex items-center justify-center shadow-md">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-row justify-center items-center">
        <Button className="text-[#4CAF4F] text-xl bg-[#F5F7FA]">ReadMore</Button>
        <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9346 11.8659L14.2267 9.57384C14.4985 9.302 14.4985 8.86128 14.2267 8.58945L11.9346 6.29736M14.0228 9.08164L4.27783 9.08164" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
</svg>
</div>
        
      </CardFooter>
    </Card>
  );
}
