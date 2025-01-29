import UserCommentsList from "@/components/comments/user-comment-list";
import PlainLayout from "@/components/master/PlainLayout";
import { getUserComments } from "@/lib/data-service";
import { cookies } from "next/headers";
import React from "react";

const Comments = async () => {
  const cookie = await cookies();
  const comments = await getUserComments(cookie);
  return (
    <PlainLayout>
      <UserCommentsList data={comments.data} />
    </PlainLayout>
  );
};

export default Comments;
