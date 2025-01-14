import { Flex, Stack } from "@chakra-ui/react";
import { LuBookMarked, LuLanguages } from "react-icons/lu";
import { LinkButton } from "@/components/ui/link-button";
import { useRouter } from "next/router";
import { ColorModeButton } from "@/components/ui/color-mode";

export function MySidebar() {
  const router = useRouter();

  function onClick(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Flex
      color="white"
      alignItems={"center"}
      justifyContent={"space-between"}
      direction={{ base: "row", lg: "column" }}
      width={{ base: "100vw", lg: "60px" }}
      height={{ base: "60px", lg: "100dvh" }}
      pt={{ base: 0, lg: 5 }}
      pb={{ base: 0, lg: 5 }}
      pl={{ base: 5, lg: 0 }}
      pr={{ base: 5, lg: 0 }}
      position="fixed"
      zIndex={1}
      className={"ssssss111ss"}
      top={{ base: "calc(100dvh - 60px)", lg: "0" }}
      left={0}
      backgroundColor={"bg.panel"}
    >
      <LinkButton
        mt={{ base: 0, lg: 2 }}
        textAlign="center"
        width={"40px"}
        height={"40px"}
        variant="ghost"
        fontSize="xl"
        fontWeight="bold"
        href={"/"}
        onClick={onClick}
      >
        L5R
      </LinkButton>
      <Stack
        direction={{ base: "row", lg: "column" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <LinkButton
          variant="ghost"
          align="center"
          p="3"
          width={"40px"}
          height={"40px"}
        >
          <LuBookMarked />
        </LinkButton>

        <ColorModeButton />

        <LinkButton
          variant="ghost"
          align="center"
          p="3"
          width={"40px"}
          height={"40px"}
        >
          <LuLanguages />
        </LinkButton>
      </Stack>
    </Flex>
  );
}
