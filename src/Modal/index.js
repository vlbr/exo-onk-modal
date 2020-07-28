import React from "react";
import { Button } from "@ornikar/kitt";
import "./Modal.css";

export default function Modal({ title }) {
  return (
    <div className="modal">
      <div className="modal-header">
        {title || "Title"}
        <div className="modal-close">
          <Button icon="cross" />
        </div>
      </div>
      <div className="modal-content">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          molestie consequat scelerisque. Nam non gravida neque. In non est id
          ex pulvinar vestibulum ac eget nunc. Etiam ipsum dolor, suscipit
          convallis vulputate non, egestas nec dolor. Nulla dignissim orci
          viverra cursus ultricies. Morbi a felis nec sem tempor efficitur vitae
          et sem. Integer eget tortor pharetra, facilisis eros a, consequat
          lectus. Nam volutpat aliquam tortor, id rhoncus arcu vestibulum a.
          Vivamus scelerisque mi gravida purus dapibus, et ultricies nunc
          dictum. Integer vulputate maximus mauris at commodo. Praesent
          vulputate venenatis ex, eget imperdiet leo. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Donec sit amet magna a massa convallis pulvinar in
          ullamcorper justo. Nulla et neque dui. In dignissim justo eu risus
          congue, quis venenatis libero aliquam. Aliquam at dolor sed leo dictum
          porta et at magna. Nam rhoncus leo quis odio eleifend vestibulum. Nam
          non elit tincidunt quam tincidunt aliquam. Nullam ut nunc eu arcu
          lacinia aliquet vitae at sem. Aliquam dictum iaculis libero, commodo
          vehicula lorem tincidunt ut. Vestibulum risus diam, pretium in urna
          eu, placerat pretium dui. Mauris vel libero lectus. Phasellus laoreet
          nec lectus ac facilisis. Etiam non nunc nulla. Suspendisse potenti.
          Etiam non scelerisque massa. Duis varius consequat ipsum, non luctus
          augue pharetra vitae. Nam odio lectus, malesuada commodo blandit in,
          aliquet varius nibh. Pellentesque imperdiet vestibulum purus eget
          hendrerit. Nullam et dui non eros iaculis viverra. Nam efficitur
          congue tortor, ut maximus nibh dictum at. Maecenas venenatis dui vel
          erat ullamcorper, vitae molestie arcu bibendum. Etiam auctor tellus
          non tortor tristique volutpat. Aenean massa sapien, viverra a ligula
          at, ultrices euismod purus. Donec vulputate, elit a tempor pharetra,
          dolor nisl suscipit massa, quis feugiat dolor quam sit amet nibh. Ut
          sed posuere odio. Vestibulum laoreet sapien vitae scelerisque
          bibendum. Nullam fermentum est quis auctor ullamcorper. Nam ultrices,
          ex ac vulputate tincidunt, metus mauris rutrum quam, vitae vestibulum
          sapien sapien sit amet lacus. Sed cursus in justo vitae hendrerit.
          Pellentesque rhoncus mattis erat, non consectetur eros accumsan ut.
          Etiam pellentesque, nulla in blandit placerat, mauris nibh rutrum sem,
          non lacinia mi tortor quis ligula. Quisque iaculis diam eu tortor
          convallis, at consequat arcu fringilla. Donec rhoncus vitae mi eget
          accumsan. Etiam nec libero est. Morbi sodales mauris dui. Nunc sit
          amet neque non lectus dictum imperdiet sed vel nibh. Nam faucibus
          velit ac eleifend congue. Donec porttitor luctus nisi, a ullamcorper
          magna venenatis et. Sed tristique eleifend dui eget dignissim.
        </div>
        <div>
          <div>title</div>
          <div>second lorem ipsum</div>
        </div>
      </div>
      <div className="modal-footer">
        <Button>Label</Button>
        <Button>Label</Button>
      </div>
    </div>
  );
}
