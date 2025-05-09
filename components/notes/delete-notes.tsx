'use client';
import { deleteTodo } from '@/app/actions/notes-actions';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const DeleteNotes = ({ id, userId }: { id: string; userId: string }) => {
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger onClick={e => e.stopPropagation()}>
        Delete Note
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            notes and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={async e => {
                e.stopPropagation();
                const res = await deleteTodo(id, userId);
                toast({
                  title: res.error ? 'Uh oh! Something went wrong.' : 'Success',
                  description: res.message,
                  variant: res.error ? 'destructive' : 'default',
                });
              }}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
