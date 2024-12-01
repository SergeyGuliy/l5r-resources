import Head from "next/head";
import { ClientOnly } from "@chakra-ui/react";
import { useMemo } from "react";

const defaultName = "L5R";
const defaultDescription = "L5R";

export function MyPageWrapper({ metadata, children }) {
  const title = useMemo(
    () =>
      metadata?.title ? `${defaultName} - ${metadata.title}` : defaultName,
    [metadata]
  );

  const description = useMemo(
    () => metadata?.description || defaultDescription,
    [metadata]
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <ClientOnly>{children}</ClientOnly>
    </>
  );
}
