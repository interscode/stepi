import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export function StepiLogo({ size, type }: { size: number, type?: "primary" | "secondary" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <G clip-path="url(#clip0_31_10)">{
        type !== "secondary" &&
        <Rect width="100" height="100" rx="20" fill={"#330072" } />}
        <Path
          d="M75.1267 33.5383V27.7283C75.1267 23.855 71.0597 19.9817 49.95 19.9817C28.8403 19.9817 24.7733 23.855 24.7733 27.7283V33.5383C22.643 33.5383 20.9 35.2813 20.9 37.4117V41.285C20.9 43.4153 22.643 45.1583 24.7733 45.1583V66.4617C24.7733 68.592 25.9353 70.5287 27.6783 71.497V75.1767C27.6783 77.888 29.8087 80.0183 32.52 80.0183C35.2313 80.0183 37.3617 77.888 37.3617 75.1767V72.2717H62.5383V75.1767C62.5383 77.888 64.6687 80.0183 67.38 80.0183C70.0913 80.0183 72.2217 77.888 72.2217 75.1767V71.497C73.9647 70.5287 75.1267 68.592 75.1267 66.4617V45.1583C77.257 45.1583 79 43.4153 79 41.285V37.4117C79 35.2813 77.257 33.5383 75.1267 33.5383ZM36.3933 25.7917H63.5067C64.6687 25.7917 65.4433 26.5663 65.4433 27.7283C65.4433 28.8903 64.6687 29.665 63.5067 29.665H36.3933C35.2313 29.665 34.4567 28.8903 34.4567 27.7283C34.4567 26.5663 35.2313 25.7917 36.3933 25.7917ZM32.52 68.3983C30.3897 68.3983 28.6467 66.6553 28.6467 64.525C28.6467 62.3947 30.3897 60.6517 32.52 60.6517C34.6503 60.6517 36.3933 62.3947 36.3933 64.525C36.3933 66.6553 34.6503 68.3983 32.52 68.3983ZM67.38 68.3983C65.2497 68.3983 63.5067 66.6553 63.5067 64.525C63.5067 62.3947 65.2497 60.6517 67.38 60.6517C69.5103 60.6517 71.2533 62.3947 71.2533 64.525C71.2533 66.6553 69.5103 68.3983 67.38 68.3983ZM71.2533 49.0317C71.2533 52.1303 68.7357 54.8417 65.4433 54.8417H34.4567C31.1643 54.8417 28.6467 52.1303 28.6467 49.0317V39.3483C28.6467 36.056 31.1643 33.5383 34.4567 33.5383H65.4433C68.7357 33.5383 71.2533 36.056 71.2533 39.3483V49.0317Z"
          fill={type=== "secondary" ? "#330072" : "#f8f8ff"}
        />
        <Path
          d="M83.1 20.25C83.4315 20.25 83.7495 20.3817 83.9839 20.6161C84.2183 20.8505 84.35 21.1685 84.35 21.5C84.35 21.1685 84.4817 20.8505 84.7161 20.6161C84.9505 20.3817 85.2685 20.25 85.6 20.25C85.2685 20.25 84.9505 20.1183 84.7161 19.8839C84.4817 19.6495 84.35 19.3315 84.35 19C84.35 19.3315 84.2183 19.6495 83.9839 19.8839C83.7495 20.1183 83.4315 20.25 83.1 20.25ZM83.1 12.75C83.4315 12.75 83.7495 12.8817 83.9839 13.1161C84.2183 13.3505 84.35 13.6685 84.35 14C84.35 13.6685 84.4817 13.3505 84.7161 13.1161C84.9505 12.8817 85.2685 12.75 85.6 12.75C85.2685 12.75 84.9505 12.6183 84.7161 12.3839C84.4817 12.1495 84.35 11.8315 84.35 11.5C84.35 11.8315 84.2183 12.1495 83.9839 12.3839C83.7495 12.6183 83.4315 12.75 83.1 12.75ZM78.725 20.25C78.725 19.2554 79.1201 18.3016 79.8234 17.5983C80.5266 16.8951 81.4804 16.5 82.475 16.5C81.4804 16.5 80.5266 16.1049 79.8234 15.4017C79.1201 14.6984 78.725 13.7446 78.725 12.75C78.725 13.7446 78.3299 14.6984 77.6267 15.4017C76.9234 16.1049 75.9696 16.5 74.975 16.5C75.9696 16.5 76.9234 16.8951 77.6267 17.5983C78.3299 18.3016 78.725 19.2554 78.725 20.25Z"
          fill={type=== "secondary" ? "#330072" : "#f8f8ff" }
          stroke="#F8F8FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_31_10">
          <Rect width="100" height="100" rx="10" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
