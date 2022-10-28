import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../../components/Admin/Layout";
import MediaGallery from "../../../components/Admin/Media/MediaGallery";
import MediaHeading from "../../../components/Admin/Media/MediaHeading";
import MediaSearchBar from "../../../components/Admin/Media/MediaSearchBar";

const index = () => {
  return (
    <>
      <Head>
        <title>Admin - Media</title>t
      </Head>
      <Layout>
        <Stack spacing={9}>
          <MediaHeading />
          <MediaSearchBar />
          <MediaGallery />
        </Stack>
      </Layout>
    </>
  );
};

export default index;
