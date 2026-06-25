import { useEffect, useState } from "react";
import { List } from "..";
import { useListStore } from "../../../store/item";
import { EmptyState } from "../EmptyState";
import { ListItem } from "../ListItem";
import { Toast } from "../../Toast";
import { AnimatePresence } from "motion/react";

export function ListSection() {
  const { items } = useListStore();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast]);

  function handleToast() {
    setShowToast(true);
  }

  const hasItems = items.length > 0;
  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
      {hasItems ? (
        <List key="list">
          {items.map((item) => (
            <ListItem key={item.id} {...item} notifyDelete={handleToast} />
          ))}
        </List>
      ) : (
        <EmptyState key="empty" />
      )}
      {/* </AnimatePresence> */}
      <AnimatePresence>{showToast && <Toast />}</AnimatePresence>
    </>
  );
}
