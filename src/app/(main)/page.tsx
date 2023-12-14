"use client";
import BannerImage from "@/modules/banner";
import Slider from "@/modules/slider";
import TrendingProducts from "@/modules/trendings";

export default function Home() {
  return (
    <div>
      <Slider />
      <TrendingProducts />
      <BannerImage />
    </div>
  );
}
