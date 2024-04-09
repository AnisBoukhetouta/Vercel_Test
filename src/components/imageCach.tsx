interface Props {
  url: string;
  setIsLoading: (event: boolean) => void;
}

const CachImages = async ({ url, setIsLoading }: Props) => {
  return await new Promise((resolve, reject) => {
    const image = new Image();

    image.src = url;
    // setIsLoading(false);
    image.onload = () => {
      setIsLoading(false);
      resolve;
    };
    image.onerror = reject;
  });
};

export default CachImages;
