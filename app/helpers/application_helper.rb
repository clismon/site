module ApplicationHelper
    def title(label)
    content_for(:title) {label}
    content_tag(:h1, label)
  end
end
