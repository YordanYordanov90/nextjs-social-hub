"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { toggleFollow } from '@/actions/user.actions';

const FollowButton = ({ userId }: { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(userId);
      toast.success("Followed");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }finally{
      setIsLoading(false);
    }
  };
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="h-4 w-4 animate-spin" /> : "Follow"}
    </Button>
  );
};

export default FollowButton;
