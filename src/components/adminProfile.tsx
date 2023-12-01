"use client";

import { LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CustomImage from "./customImage";


export default function AdminProfile() {
  const router = useRouter();

  const handleSignOut = () => {
   
    toast.success("Signed out successfully");
    router.push("/signIn");
  };

  const data: any =[]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          {data?.image ? (
            <CustomImage src={data?.image} alt="admin image" priority={true} />
          ) : (
            <CustomImage
              src="https://github.com/shadcn.png"
              alt="default image"
              priority={true}
            />
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-48 mt-2 mr-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/profile`}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>

          <Link href={`/settings`}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSignOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
