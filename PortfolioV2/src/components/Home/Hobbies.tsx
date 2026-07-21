export default function Hobbies() {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-300 border border-base-100">
        <input type="radio" name="hobbies" defaultChecked />
        <div className="collapse-title font-semibold">Video Games</div>
        <div className="collapse-content text-sm">
          I love discover new universe and curious by how it's make
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-300 border border-base-100">
        <input type="radio" name="hobbies" />
        <div className="collapse-title font-semibold">Computes Sciences</div>
        <div className="collapse-content text-sm">Blablabla</div>
      </div>
      <div className="collapse collapse-plus bg-base-300 border border-base-100">
        <input type="radio" name="hobbies" />
        <div className="collapse-title font-semibold">New and politics</div>
        <div className="collapse-content text-sm">Il like be informed</div>
      </div>
      <div className="collapse collapse-plus bg-base-300 border border-base-100">
        <input type="radio" name="hobbies" />
        <div className="collapse-title font-semibold">Movies and series</div>
        <div className="collapse-content text-sm">bla bla bla</div>
      </div>
      <div className="collapse collapse-plus bg-base-300 border border-base-100">
        <input type="radio" name="hobbies" />
        <div className="collapse-title font-semibold">Internet culture</div>
        <div className="collapse-content text-sm">blablabla</div>
      </div>
    </div>
  );
}
