import { Flex, Link, Text } from "@radix-ui/themes";
import { Camera } from "lucide-react";

function NavBar() {
  return (
    <header>
      <Flex
        position="sticky"
        top="0"
        justify="between"
        align="center"
        px="6"
        py="3"
      >
        <Link href="#home" size="3">
          <Camera />
        </Link>
        <Flex gap="4">
          <Link href="#home" size="3">
            <Text>Home</Text>
          </Link>
          <Link href="#about" size="3">
            <Text>About</Text>
          </Link>
          <Link href="#projects" size="3">
            <Text>Projects</Text>
          </Link>
          <Link href="#contact" size="3">
            <Text>Contact</Text>
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}

export default NavBar;
