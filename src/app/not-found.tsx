function shuffleArray(arr: number[]) {
  const newArray = [...arr];
  let currentIndex = newArray.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

export default function NotFoundClient() {
  const random = Math.floor(Math.random() * 30);
  const nums = Array.from({ length: 30 }, (_, i) => i + 1);
  const shuffledNums = shuffleArray(nums);
  const num = shuffledNums[random];
  const src = `/asset/fail/fail-${num}.gif?${Date.now()}`;

  return (
    <section className="grid h-screen w-full place-items-center">
      <div
        className="absolute inset-0 bg-center bg-no-repeat brightness-75 max-sm:bg-contain sm:[background-size:_100%_100%;]"
        style={{
          backgroundImage: `url(${src})`,
        }}
        suppressHydrationWarning
      />
      <h1 className="z-10 text-xl text-white">404 Page Not Found</h1>
    </section>
  );
}
