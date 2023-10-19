import React, { useRef } from "react";
import { saveAs } from 'file-saver';
import Header from "../../UniversalCompontes/Header";
import Footer from "../../UniversalCompontes/Footer";
import "./CodigoQr.css"; // Importa tu archivo CSS


const CodigoQr = () => {
  const qrBase64 = "data:image/png;base64,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Hjx49OjRumKzMWPGyKeqT58+egMPclnfr1V7e/vTTz99asEuRowY0djYqMv1QG+VphK9tWHDBokP+f2ajh/84Adz5sz57W9/KzuZDomt8ePH6xZ4uOKKK/r27avn0sPQoUMlCnW5Hl566aWf/OQn1113na44nltuuWXJkiUfffSRvo1mnZ2dbW1tkyZN0ht4kNiqr6/Xh+Rh2LBhs2fP1ocU0rvvvrtz584TJ07otpq595aEkRTS0qVLdcVmq1atuueeewYNGqQ38OD+tdq7d+/7779/asEu5s+fL8mly/VAb5WmEr0V/19o3clMmTt37q5du3QL0vBi+P8rJMuTRepyPWzcuHHy5Mm9e/fWG8QjH2D5DMvHWFdslsfMcScDR8aOrjgN7r1ViZPj/rVyJ8uTRepyPdBbpaG3YqK3YqK37OitmOitmOitTPSWorfs6K2Y6C07eismeismeisTvaXoLTt6KyZ6y47eioneioneykRvKXrLjt6Kid6yo7diordiorcy0VuK3rKjt2Kit+zorZjorZjorUz0lqK37OitmOgtO3orJnorJnorE72l6C07eismesuO3oqJ3oqJ3spEbyl6y47eionesqO3YqK3YqK3MtFbit6yo7diorfs6K2Y6K2Y6K1M9Jait+zorZjoLTt6KyZ6KyZ6KxO9pegtO3orJnrLjt6Kid6Kid7KRG8pesuO3oqJ3rKjt2Kit2KitzLRW4resqO3YqK37OitmOitmOitTPSWorfs6K2Y6C07eismeismeisTvaXoLTt6KyZ6y47eioneioneykRvKXrLjt6Kid6yo7diordiorcy0VuK3rKjt2Kit+zorZjorZjorUz0lqK37OitmOgtO3orJnorJnorE72l6C07eismesuO3oqJ3oqJ3spEbyl6y47eionesqO3YqK3YqK3MtFbit6yo7diorfs6K2Y6K2Y6K1M9Jait+zorZjoLTt6KyZ6KyZ6KxO9pegtO3orJnrLjt6Kid6Kid7KRG8pesuO3oqJ3rKjt2Kit2KitzLRW8r9BP/xj3+cN2+eTEAvw4YN69+/vy7XQ319/ZAhQ0aNGqU3MJNv8MqVK/fv369bYHb48OHt27evW7dOviIufv/73//pT386cOCA3sDD+vXrZ86cqVsQ0t13371gwQLdAg/PP//89OnTW1pa9AZmw4cPHzhwYM+ePfVoml1wwQU33XSTTAldsdny5csnTJgwYMAAvYEHeZ3lpdYt8DBlypSnn35aV5wGecTyoOVx656auZ+c1tbWJ5544q677tKH5GHq1KnPPvus3sCDfK12796tE83D+++/L0dRl+vhwQcfXL16tXwR9AbVRG8p996S4yuHWI+zh9mzZzc3N+tyPcjHQz4h8iHRG5hJGEkeOb4Skm4ScJJx+s6Z/fCHP3zuuef+8pe/6A08fPjhhxs2bNAtCElGswxo3QIP8vGQT4h8SPQGZu5fTUk3CTjJOF2xmfwskR8n8hNFb+BBXmd5qXULPMgXTpJLV5wG91J3Pznys0R+nMhPFH1IHuTnk/yI0ht4mDdvnnytdKJ52Lt3b3t7uy7Xg/ys3bFjx6effqo3qCZ6S/EvtAHt2rVr7ty5gwYN0hWb9e7dW+pt48aNeoM0xD857v9XqBLcZ458luTbqVdHDHnMHPe/YZBjI4dHr47c0FuK3gqI3nJBb8VEb6WA3sJp9JaitwKit1zQWzHRWymgt3AavaXorYDoLRf0Vkz0VgroLZxGbyl6KyB6ywW9FRO9lQJ6C6fRW4reCojeckFvxURvpYDewmn0lqK3AqK3XNBbMdFbKaC3cBq9peitgOgtF/RWTPRWCugtnEZvKXorIHrLBb0VE72VAnoLp9Fbit4KiN5yQW/FRG+lgN7CafSWorcCordc0Fsx0VspoLdwGr2l6K2A6C0X9FZM9FYK6C2cRm8peisgessFvRUTvZUCegun0VuK3gqI3nJBb8VEb6WA3sJp9JaitwKit1zQWzHRWymgt3AavaXorYDoLRf0Vkz0VgroLZxGbyl6KyB6ywW9FRO9lQJ6C6fRW4reCojeckFvxURvpYDewmn0lqK3AqK3XNBbMdFbKaC3cBq9peitgOgtF/RWTPRWCugtnEZvKXorIHrLBb0VE72VAnoLp9Fbit4KiN5yQW/FRG+lgN7CafSWorcCordc0Fsx0VspoLdwGr2l6K2A6C0X9FZM9FYK6C2cRm8peisgessFvRUTvZUCegunVbK3Ojs729raJk2aJGfOy7x58zZt2qQ3CEmWJ4vU5XqQDZRtlM3UG8Szb9++FStWjBs3TldsdsMNN/ziF7+Qr7vewENHR4c8Gvlwenn//ff37t2rV/fgfnLGjh375JNPrlmzRlds9pvf/OaRRx75/ve/rzcwGzZs2MUXX1xXV6ffE7Mzzzzzy1/+8te//nW9gYd77713yZIlugUeZs+eLf/humIP9fX1l112mS43De4nRy41evToRYsW6UPyMG3atKFDh+oNPNBbxahkbx0/flw+matXr5bM9/L222/Lh1NvEJIsTxapy/UgGyjbKJupN4hHWnDLli0ShbpiM6k3+aEpGac38CAPRWrmdj9PP/10e3u7Xt2D+8l55plnHnrooTvvvFNXbPajH/1IWuG5557TG5g99dRTLS0tDQ0N+j0x+9znPjd8+PBHH31Ub+BBjo0kl26Bh+bm5v79++uKPUhsTZw4UZebBveTc/bZZw8aNGjkyJH6kDxcddVVjisU9FYxKtlbQBwyo+Vnsc4tD/FnnzTr5MmTe/furSs2kw/S3Llzd+3apTcwq8T/iXY/Oe5kebJIXW4a3E9OJdBbxaC3ABN6y47eioneSgS9VQx6CzCht+zorZjorUTQW8WgtwATesuO3oqJ3koEvVUMegswobfs6K2Y6K1E0FvFoLcAE3rLjt6Kid5KBL1VDHoLMKG37OitmOitRNBbxaC3ABN6y47eioneSgS9VQx6CzCht+zorZjorUTQW8WgtwATesuO3oqJ3koEvVUMegswobfs6K2Y6K1E0FvFoLcAE3rLjt6Kid5KBL1VDHoLMKG37OitmOitRNBbxaC3ABN6y47eioneSgS9VQx6CzCht+zorZjorUTQW8WgtwATesuO3oqJ3koEvVUMegswobfs6K2Y6K1E0FvFoLcAE3rLjt6Kid5KBL1VDHoLMKG37OitmOitRNBbxaC3ABN6y47eioneSgS9VQx6CzCht+zorZjorUTQW8WgtwATesuO3oqJ3koEvVUMegswobfs6K2Y6K1E0FvFoLcAE3rLjt6Kid5KBL1VDHoLMKG37OitmOitRNBbxahkb504cWLPnj1bt26V8Qd0XXt7+wcffHDo0CE9SR7cv5rNzc0///nPdcUhtba2PvDAA9/5zne+4WTUqFGPPfbY2rVr9QZm//Ef/zFp0qSvfOUruqdmdXV1LS0tS5cu1Rt4eOaZZ8aOHatb4GHAgAH19fW6Yg/uvSWvnryA8hrqFpht3ry5o6Pj2LFjegOzNHsr/syRz7189OXTr8+pmirZW0ePHn3zzTfnz58vvziBrps6daq0gkx8PUke3HursbFx5MiRuuKQJLbmzJnz9NNPSzG4WLhw4cyZM++77z69gdm4ceO+/e1vO8bH2Wefffnll0ty6Q08PPTQQ08++aRugYcJEyYMGTJEV+zBvbfk1ZMXUF5D3QIzOYevvfbaxx9/rDcwS7O34s8c+dzLR18+/fqcqqmSvXXw4MHFixdLkvcG/hkNDQ0y6+XntZ4kD+69ddZZZ/Xs2VNXHNJ3vvMdia2Ojo5/ONm0adOMGTMGDBigNzD7/Oc/f8455/zLv/yL7qnZGWecIclVV1enN/Bw5513rlmzRrfAw/Lly0eNGqUr9uDeW/LqyQsor6FugVlTU5PE+u7du/UGZmn2VvyZI597+ejLp1+fUzVVsrdkssiPuW984xt6WICukfdWfiptTOyvcNzJqycvoLyGugVm27Ztk97q16+f3iANt99+++uvv65b4OHVV1+98cYb9eoe3HtLXj15AeU11BuYSRhJHkkk6Q3M0uyt+NxnTinoLSSE3nJBb7mgt+zorUTQW6Wht1AbessFveWC3rKjtxJBb5WG3kJt6C0X9JYLesuO3koEvVUaegu1obdc0Fsu6C07eisR9FZp6C3Uht5yQW+5oLfs6K1E0FulobdQG3rLBb3lgt6yo7cSQW+Vht5CbegtF/SWC3rLjt5KBL1VGnoLtaG3XNBbLugtO3orEfRWaegt1IbeckFvuaC37OitRNBbpaG3UBt6ywW95YLesqO3EkFvlYbeQm3oLRf0lgt6y47eSgS9VRp6C7Wht1zQWy7oLTt6KxH0VmnoLdSG3nJBb7mgt+zorUTQW6Wht1AbessFveWC3rKjtxJBb5WG3kJt6C0X9JYLesuO3koEvVUaegu1obdc0Fsu6C07eisR9FZp6C3Uht5yQW+5oLfs6K1E0FulobdQG3rLBb3lgt6yo7cSQW+Vht5CbegtF/SWC3rLjt5KBL1VGnoLtaG3XNBbLugtO3orEfRWaegt1IbeckFvuaC37OitRNBbpaG3UBt6ywW95YLesqO3EkFvlYbeQm3oLRf0lgt6y47eSgS9VZo8euu888676KKL5DVDHJdccknfvn179OihD8ksj95qa2sbN26crtiDZIfjB0nU1dU1NDTo1T2MGjVq4cKFmzZtkk5yIdnx8MMPX3nllXqDNEybNu0Pf/iDHiMP8Xtr8+bNc+bMaWpq0i0wu+666xYvXrxnzx69gVklesv9a+U+c9zRW6XJo7eGDh06fvx4edMQx/Tp06+99lpJLn1IZnn01pYtW1asWKEr9jB27Nivfe1rumIPF198cUtLi17dw2OPPTZz5swZfiS2Zs2a9fjjj+sN0rBq1aq//e1veow8xO+tjo6O1157TWJdt8BMYuudd95x/AxXorfcv1buM8cdvVWaPHrr5ptvfvnll+VlQxzt7e2SXJdccok+JLM8equzs3Pfvn26Yg9Lliz53ve+pyv2MGzYsKeeekqv7mHt2rX33XffgAED5GexiyuvvFJi67333tMbpOHAgQNHjx7VY+Qhfm8dO3bs448/3r17t26B2Z49e+RzcOLECb2BmVxT+iN4b7l/rdxnjjt6qzR59Jb731LATgaB7+zLo7fc8Vc4qE38kxOf+8zJQ/y//HNHb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WG3koEveWC3koEvWVHb8VEb5WmEr11+PDh/fv3y9ubjj179sijOXHihG6BmVwzfm91dnbu27fv1A64WLJkyfe+9z1dsYf4vXXJJZdMnz69vb1dtwA1cT85w4YNe+qpp/TqaZBDKEdRDqRuQUg333zzyy+/rCv24H5yzjnnnPr6+n5+rr/++qVLlx48eFBnUDXRW8q9t7Zv375y5UrJhXQsXrz4nXfecfwJIoNALhu8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NzfPnz9/69atepI8rF69etKkSXqDkGR5skhdbkgffPDBokWLrr/+el1xGmbNmvXuu+/qFoQky5NF6nKB8sjnXj768unXo1lNleyt48ePb968WXZfghfousWLF7/55pt79uzRk+Rh27ZtbW1teoOQZHmySF1uSAcOHHjnnXeWLl2qK07DunXrdu7cqVsQkixPFqnLBcojn3v56MunX49mNVWyt06ePCn7Lqn7D+CfcfDgwaNHj544cUJPkof4R1GWF3xOffbZZ/Jc5OnoitNw5MgR36PoTpYni9TlAuU5NcTk069Hs5oq2VsAAAAVQm8BAADki94CAADIF70FAACQL3oLAAAgX/QWAABAvugtAACAfNFbAAAA+aK3AAAA8kVvAQAA5IveAgAAyBe9BQAAkC96CwAAIF/0FgAAQL7oLQAAgHzRWwAAAPmitwAAAPJFbwEAAOSL3gIAAMgXvQUAAJAvegsAACBf9BYAAEC+6C0AAIB80VsAAAD5orcAAADyRW8BAADki94CAADIF70FAACQL3oLAAAgX/QWAABAvugtAACAfNFbAAAA+aK3AAAA8kVvAQAA5IveAgAAyBe9BQAAkC96CwAAIF/0FgAAQL7oLQAAgHzRWwAAAPmitwAAAPJFbwEAAOSL3gIAAMgXvQUAAJAvegsAACBf9BYAAECe/vd//z93c+DKnfRWwAAAAABJRU5ErkJggg=="; 
  const qrLink = "https://www.ejemplo.com"; // Reemplaza con el enlace al que debe dirigir el QR
  const qrFileName = "codigo_qr.pdf"; // Nombre del archivo PDF

  const saveAsPDF = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 300; // Ancho del lienzo (ajusta según tus necesidades)
    canvas.height = 300; // Alto del lienzo (ajusta según tus necesidades)
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = qrBase64;
    img.onload = () => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        saveAs(blob, qrFileName);
      }, 'image/png');
    };
  };

  return (
    <div>
         <Header/>
    <div className="centered shadowed">
       
      <h1>Nombre del QR:</h1>
      <div className="shadowed"> {/* Aplica las clases CSS aquí */}
        <img src={qrBase64} alt="Código QR" width={450}/>
      </div>
      <div>
        <p className="mt-3">Enlace al código QR: {qrLink}</p>
      </div>
      <button class="buttonDownload" onClick={saveAsPDF} type="button">
        <span class="button__text">Imprimir QR</span>
        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
      </button>
      </div>
      <Footer/>
    </div>
  );
};

export default CodigoQr;
