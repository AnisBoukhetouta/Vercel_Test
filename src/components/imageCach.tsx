interface Props {
  url: string;
  setIsLoading: (event: boolean) => void;
}

const CachImages = async ({ url, setIsLoading }: Props) => {
  console.log('1111111111111111', url)
  console.log('2222222222222222', setIsLoading)
  return await new Promise((resolve, reject) => {
    const image = new Image();

    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
    setIsLoading(false);
  });
};

export default CachImages;
