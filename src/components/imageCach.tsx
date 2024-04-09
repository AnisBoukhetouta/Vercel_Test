interface Props {
  url: string;
  setIsLoading: (event: boolean) => void;
}

const CachImages = async ({ url, setIsLoading }: Props) => {
  console.log("1111111111111111", url);
  return await new Promise((resolve, reject) => {
    const image = new Image();

    image.src = url;
    setIsLoading(false);
    image.onload = () => {
      console.log("~~~~~~~~~~~~~~vvvvvvvvvv");
      setIsLoading(true);
      resolve;
    };
    image.onerror = reject;
  });
};

export default CachImages;
