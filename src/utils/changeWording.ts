class ChangeWording {
  private node: HTMLElement | null;

  constructor(x: HTMLElement | null = null) {
    this.node = x;
    this.letterfy(this.node.querySelector("h1"));
  }

  private letterfy(node: HTMLElement | null): void {
    if (!node) return;
    const text = node.innerText;
    node.innerText = "";
    node.classList.add("current");
    for (let c = 0; c < text.length; c++) {
      const span = document.createElement("span");
      span.innerText = text[c];
      span.classList.add("letter", "in");
      span.style.animationDelay = `${c * 0.1}s`;
      node.appendChild(span);
    }
  }

  public changeText(newText: string): void {
    if (!this.node) return;
    const oldTitle = this.node.querySelector(".current");
    if (!oldTitle) return;
    let delay = 0;
    for (const letter of oldTitle.children) {
      (letter as HTMLElement).style.animationDelay = `${delay++ * 0.1}s`;
      letter.classList.remove("in");
      letter.classList.add("out");
    }
    oldTitle.classList.remove("current");
    const newTitle = document.createElement("h1");
    newTitle.classList.add("current");
    for (let c = 0; c < newText.length; c++) {
      const span = document.createElement("span");
      span.innerText = newText[c];
      span.classList.add("letter", "in");
      span.style.animationDelay = `${c * 0.1 + 0.5}s`;
      newTitle.appendChild(span);
    }
    if (this.node) this.node.appendChild(newTitle);
    setTimeout(() => {
      if (oldTitle.parentNode) oldTitle.parentNode.removeChild(oldTitle);
    }, 2000);
  }
}

export default ChangeWording;
